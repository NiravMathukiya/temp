"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Header from "../../../components/new-request/header";
import GuidelinesSection from "../../../components/new-request/guidelines-section";
import ChannelsSection from "../../../components/new-request/channels-section";
import ProgramInfoSection from "../../../components/new-request/program-info-section";
import JamatAnnouncementSection from "../../../components/new-request/jamat-announcement-section";
import NewsletterSection from "../../../components/new-request/newsletter-section";
import JamatkhanaSection from "../../../components/new-request/jamatkhana-section";
import FormActions from "../../../components/new-request/form-actions";
// import Header from "@/components/new-request/header"
// import GuidelinesSection from "@/components/new-request/guidelines-section"
// import ChannelsSection from "@/components/new-request/channels-section"
// import ProgramInfoSection from "@/components/new-request/program-info-section"
// import JamatAnnouncementSection from "@/components/new-request/jamat-announcement-section"
// import NewsletterSection from "@/components/new-request/newsletter-section"
// import JamatkhanaSection from "@/components/new-request/jamatkhana-section"
// import FormActions from "@/components/new-request/form-actions"

export default function NewRequestPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      channels: {
        jamatAnnouncement: false,
        ismailiInsight: false,
        ismailiApp: false,
        socialMedia: false,
        graphicRequest: false,
      },
      programVenue: {
        austin: false,
        austinDowntown: false,
        austinSouth: false,
        beaumont: false,
        houstonHq: false,
        houstonPrincipal: false,
        katy: false,
        sanAntonio: false,
        spring: false,
        sugarLand: false,
        clearLake: false,
        collegeStation: false,
        corpusChristi: false,
        harvestGreen: false,
      },
      customVenues: [],
      jamatkhanas: {
        acstCorpusChristi: false,
        acstSanAntonio: false,
        acctCollegeStation: false,
        acctAustinSouth: false,
        acctAustin: false,
        ghClearLake: false,
        ghKaty: false,
        ghHeadquarters: false,
        ghPrincipal: false,
        ghHarvestGreen: false,
        ghSugarLand: false,
        ghBeaumont: false,
        ghSpring: false,
      },
      firstAnnouncement: {
        day: "21",
        month: "May",
        year: "2024",
        text: "",
      },
      noProgramDate: false,
      noProgramTime: false,
      noAttendeesNumber: false,
      requiresRegistration: "no",
      files: [],
      newsletterFiles: [],
    },
  });

  // State for UI controls
  const [newVenue, setNewVenue] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [files, setFiles] = useState([]);
  const [newsletterFiles, setNewsletterFiles] = useState([]);

  // Watch for selected channels to show/hide sections
  const watchChannels = watch("channels");
  const watchProgramVenue = watch("programVenue");
  const watchCustomVenues = watch("customVenues");

  const handleAddVenue = (venue: string) => {
    if (venue.trim()) {
      // Add the new venue to the list
      const updatedVenues = [...watchCustomVenues, venue];
      setValue("customVenues", updatedVenues);  
      setNewVenue(""); // Clear the input after adding
      setShowInput(false); // Hide input after adding the venue
    }
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    const updatedFiles = [...files, ...droppedFiles];
    setFiles(updatedFiles);
    setValue("files", updatedFiles);
  };

  const handleFileSelect = (e) => {
    const selectedFiles = e.target.files;
    const updatedFiles = [...files, ...selectedFiles];
    setFiles(updatedFiles);
    setValue("files", updatedFiles);
  };

  const handleNewsletterFileDrop = (e) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    const updatedFiles = [...newsletterFiles, ...droppedFiles];
    setNewsletterFiles(updatedFiles);
    setValue("newsletterFiles", updatedFiles);
  };

  const handleNewsletterFileSelect = (e) => {
    const selectedFiles = e.target.files;
    const updatedFiles = [...newsletterFiles, ...selectedFiles];
    setNewsletterFiles(updatedFiles);
    setValue("newsletterFiles", updatedFiles);
  };

  const onSubmit = async (data) => {
    try {
      // Combine all form data
      const formData = {
        ...data,
        files: files, // Add files from state
        newsletterFiles: newsletterFiles,
      };

      console.log("Complete form data:", formData);
      alert("Form submitted successfully!");
      router.push("/");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  // Form props to pass to child components
  const formProps = {
    register,
    errors,
    watch,
    setValue,
    newVenue,
    setNewVenue,
    showInput,
    setShowInput,
    files,
    newsletterFiles,
    handleFileDrop,
    handleFileSelect,
    handleNewsletterFileDrop,
    handleNewsletterFileSelect,
    handleAddVenue,
    watchChannels,
    watchProgramVenue,
    watchCustomVenues,
  };

  const guidLines: Array<string> = [
    "All submissions for communications to the Southwestern Jamat must be made through the Southwest Communications Portal.",
    "Please note that only one announcement per Friday is allowed. For additional announcement requests, please contact the Council Secretariat.",
    "The Council Secretariat and Institutional Communications Portfolio reserves the right to modify any submissions to align with the Council and The Ismaili Digital Communication Guidelines.",
    "For more information and guidance on how to submit your communication requests, view the Communication Policies for The Ismaili Council for The Southwestern United States",
  ];

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <Header />

      <main className="md:mx-auto rounded-2xl py-8 px-4">
        <GuidelinesSection guidelines={guidLines} />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <ChannelsSection formProps={formProps} />

          <ProgramInfoSection formProps={formProps} />

          {watchChannels?.jamatAnnouncement && (
            <JamatAnnouncementSection formProps={formProps} />
          )}

          {watchChannels?.ismailiInsight && (
            <NewsletterSection formProps={formProps} />
          )}

          <JamatkhanaSection formProps={formProps} />

          <FormActions router={router} />
        </form>
      </main>
    </div>
  );
}
