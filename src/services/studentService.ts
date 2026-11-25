export interface StudentVerificationRequest {
  schoolName: string;
  matricNumber: string;
  dateOfBirth: string;
}

export interface StudentRecord {
  fullName: string;
  matricNumber: string;
  department: string | null;
  faculty: string | null;
  level: string | null;
}

export type StudentVerificationResult =
  | { status: "not_configured" }
  | { status: "not_found" }
  | { status: "verified"; student: StudentRecord };

export interface StudentVerificationService {
  verifyStudent(
    request: StudentVerificationRequest,
  ): Promise<StudentVerificationResult>;
}

export const studentService: StudentVerificationService = {
  async verifyStudent() {
    return { status: "not_configured" };
  },
};
