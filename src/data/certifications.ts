export type Certification = {
  title: string;
  organization: string;
  issueDate: string;
  credentialId?: string;
  verifyUrl?: string;
  image?: string;
};

/**
 * Certifications.
 * NOTE: realistic examples relevant to your field (not lorem ipsum), but
 * placeholders — only list certifications you actually hold. Replace titles,
 * dates, credential IDs, and verification links with your real credentials.
 */
export const certifications: Certification[] = [
  {
    title: "Product Design Certificate",
    organization: "International Organization of Tijaniyya Brothers (IOTB), Nigeria",
    issueDate: "2023",
    //credentialId: "GUX-2023-0000",
    verifyUrl: "https://drive.google.com/file/d/1Dr0tbrl9YSmIeuTaWAIALgs4PuXeTcyg/view?usp=drivesdk",
  },
];
