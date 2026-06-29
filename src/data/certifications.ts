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
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/EXAMPLE",
  },
  /**{
    title: "Meta Front-End Developer Certificate",
    organization: "Meta",
    issueDate: "2022",
    credentialId: "MFE-2022-0000",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/EXAMPLE",
  },*/
  /**{
    title: "React Native: Mobile App Development",
    organization: "Udemy",
    issueDate: "2022",
    // No credentialId — demonstrates the optional field.
    verifyUrl: "https://www.udemy.com/certificate/EXAMPLE/",
  },*/
 /** {
    title: "Responsive Web Design Certification",
    organization: "freeCodeCamp",
    issueDate: "2021",
    credentialId: "FCC-2021-0000",
    // No verifyUrl — demonstrates the optional field.
  },*/
];
