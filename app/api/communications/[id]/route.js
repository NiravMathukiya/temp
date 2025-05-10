import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(request, { params }) {
  try {
    const id = params.id;
    
    const communication = await prisma.communication.findUnique({
      where: { id },
      include: {
        jamatAnnouncements: true,
        ismailiInsight: true,
      },
    });
    
    if (!communication) {
      return NextResponse.json({ error: 'Communication not found' }, { status: 404 });
    }
    
    return NextResponse.json(communication);
  } catch (error) {
    console.error('Error fetching communication:', error);
    return NextResponse.json({ error: 'Failed to fetch communication' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const id = params.id;
    const body = await request.json();
    
    // Update the main communication record
    const updatedCommunication = await prisma.communication.update({
      where: { id },
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
        status: body.status || 'pending',
      },
    });
    
    // Update or create Jamati Announcement if needed
    if (body.channels?.jamatAnnouncement) {
      await prisma.jamatAnnouncement.upsert({
        where: { communicationId: id },
        update: {
          firstAnnouncementDate: body.firstAnnouncementDate ? new Date(body.firstAnnouncementDate) : null,
          firstAnnouncementText: body.firstAnnouncementText || null,
          secondAnnouncementDate: body.secondAnnouncementDate ? new Date(body.secondAnnouncementDate) : null,
          secondAnnouncementText: body.secondAnnouncementText || null,
        },
        create: {
          firstAnnouncementDate: body.firstAnnouncementDate ? new Date(body.firstAnnouncementDate) : null,
          firstAnnouncementText: body.firstAnnouncementText || null,
          secondAnnouncementDate: body.secondAnnouncementDate ? new Date(body.secondAnnouncementDate) : null,
          secondAnnouncementText: body.secondAnnouncementText || null,
          communicationId: id,
        },
      });
    }
    
    // Update or create Ismaili Insight if needed
    if (body.channels?.ismailiInsight) {
      await prisma.ismailiInsight.upsert({
        where: { communicationId: id },
        update: {
          publicationDate: body.publicationDate ? new Date(body.publicationDate) : null,
          submissionTitle: body.submissionTitle || null,
          submissionType: body.submissionType || null,
          shortText: body.shortText || null,
          registrationLink: body.registrationLink || null,
          graphicLink: body.graphicLink || null,
          selectedJamatkhanas: JSON.stringify(body.jamatkhanas || {}),
        },
        create: {
          publicationDate: body.publicationDate ? new Date(body.publicationDate) : null,
          submissionTitle: body.submissionTitle || null,
          submissionType: body.submissionType || null,
          shortText: body.shortText || null,
          registrationLink: body.registrationLink || null,
          graphicLink: body.graphicLink || null,
          selectedJamatkhanas: JSON.stringify(body.jamatkhanas || {}),
          communicationId: id,
        },
      });
    }
    
    return NextResponse.json(updatedCommunication);
  } catch (error) {
    console.error('Error updating communication:', error);
    return NextResponse.json({ error: 'Failed to update communication' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const id = params.id;
    
    // Prisma will handle cascading deletes based on the schema
    const deletedCommunication = await prisma.communication.delete({
      where: { id },
    });
    
    return NextResponse.json({ message: 'Communication deleted successfully' });
  } catch (error) {
    console.error('Error deleting communication:', error);
    return NextResponse.json({ error: 'Failed to delete communication' }, { status: 500 });
  }
}