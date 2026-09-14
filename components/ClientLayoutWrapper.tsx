"use client";

import React, { useState, createContext, useContext } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";

interface ModalContextType {
  openEnquiryModal: (service?: string) => void;
}

const ModalContext = createContext<ModalContextType>({
  openEnquiryModal: () => {},
});

export const useEnquiryModal = () => useContext(ModalContext);

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  const openEnquiryModal = (service?: string) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <ModalContext.Provider value={{ openEnquiryModal }}>
      <div className="flex flex-col min-h-screen">
        <Navbar onOpenEnquiry={() => openEnquiryModal()} />
        <main className="flex-grow">{children}</main>
        <Footer />
        <EnquiryModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          preselectedService={selectedService}
        />
      </div>
    </ModalContext.Provider>
  );
}
