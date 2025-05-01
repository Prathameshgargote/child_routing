export interface Ifairs{
    fairId: string;
    fairName: string;
    startDate: number;
    endDate: number;
    timezoneId: string;
    location: {
        addressOne: string;
        addressTwo: string;
        city: string;
        state: string;
        country: string;
        zip: string;
    } |null;
    schoolDescription: string;
    numberOfUsersRegistered: number,
    numberOfSchoolsRegistered: number,
    isCandidateRegistered: false,
    bannerUrl: string
      showRegisteredUsersToCandidate: boolean,
    showRegisteredUsersToSchools: boolean,
    showRegisteredSchoolsToCandidate: boolean,
    showRegisteredSchoolsToSchools: boolean,
    fairStatus: string,
    fairStartTime:string,
    fairEndTime: string,
    type: string,
    candidateDescription: string   
}



  