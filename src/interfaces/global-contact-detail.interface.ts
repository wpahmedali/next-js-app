export interface IGlobalContactTeams {
  memberId: number;
  staffId: number;
  memberName: string;
  memberPhone: string;
  memberDesignation: string;
  memberImgPath: string;
}

export interface IGlobalContactDetail {
  countryId: number;
  cityId: number;
  Office: string;
  Location: string;
  flagImage: string;
  companyName: string;
  title: string;
  officeAddress: string;
  phoneNmberOne: string;
  phoneNmberTwo: string;
  faxNo: string;
  email: string;
  employeeCount: string;
  googleMapCode: string;
  googleHomeLink: string;
  OurTeam: string;
  teams: IGlobalContactTeams[];
}
