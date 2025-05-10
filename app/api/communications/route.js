import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  try {
    const communications = await prisma.communication.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        jamatAnnouncements: true,
        ismailiInsight: true,
      },
    });
    return NextResponse.json(communications);
  } catch (error) {
    console.error('Error fetching communications:', error);
    return NextResponse.json({ error: 'Failed to fetch communications' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.portfolioMember || !body.email || !body.programName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create the communication record
    const communication = await prisma.communication.create({
      data: {
        portfolioMember: body.portfolioMember,
        submittedBy: body.submittedBy,
        phone: `${body.phonePrefix} ${body.phoneNumber}`,
        email: body.email,
        programName: body.programName,
        programLocation: body.programLocation,
        programDate: new Date(body.programDate),
        programTime: body.noProgramTime ? null : `${body.programTimeHour}:${body.programTimeMinute} ${body.programTimeAmPm}`,
        programVenue: body.programVenue ? JSON.stringify(body.programVenue) : null,
        attendeesNumber: body.noAttendeesNumber ? null : parseInt(body.attendeesNumber || '0'),
        requiresRegistration: body.requiresRegistration === 'yes',
        channels: JSON.stringify(body.channels || {}),
        status: 'pending',
        userId: body.userId || 'anonymous', // In a real app, this would be the logged-in user's ID
      },
    });

    // Create related records if channels are selected
    if (body.channels?.jamatAnnouncement) {
      await prisma.jamatAnnouncement.create({
        data: {
          firstAnnouncementDate: body.firstAnnouncementDate ? new Date(body.firstAnnouncementDate) : null,
          firstAnnouncementText: body.firstAnnouncementText || null,
          secondAnnouncementDate: body.secondAnnouncementDate ? new Date(body.secondAnnouncementDate) : null,
          secondAnnouncementText: body.secondAnnouncementText || null,
          communicationId: communication.id,
        },
      });
    }

    if (body.channels?.ismailiInsight) {
      await prisma.ismailiInsight.create({
        data: {
          publicationDate: body.publicationDate ? new Date(body.publicationDate) : null,
          submissionTitle: body.submissionTitle || null,
          submissionType: body.submissionType || null,
          shortText: body.shortText || null,
          registrationLink: body.registrationLink || null,
          graphicLink: body.graphicLink || null,
          selectedJamatkhanas: JSON.stringify(body.jamatkhanas || {}),
          communicationId: communication.id,
        },
      });
    }

    return NextResponse.json(communication, { status: 201 });
  } catch (error) {
    console.error('Error creating communication:', error);
    return NextResponse.json({ error: 'Failed to create communication' }, { status: 500 });
  }
}