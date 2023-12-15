Table Companies {
  id int (pk)
  name string
  description string
  headquarter string
  numOfEmployees int
  industry string
  website string
}


Table JobListings {
  id int (pk)
  companyId int [ref > Companies.id]
  datePosted DateTime
  title string
  description string
  city string
  salary string
  seniorityLevel int
  securityClearance bool
  positionType PositionType
  skillsList list
  department string
  benefits list
  immigrationEligibilities list
  educationLevel EducationLevel
  numOfExperienceYears int
}

Enum PositionType {
  FULL_TIME
  PART_TIME
  APPRENTICESHIP
  INTERNSHIP
  CONTRACT
}

Table SupportedBenefits {
  jobId int [ref: > JobListings.id]
  benefit Benefit
}

Enum Benefit {
  401K
  FREE_HEALTHCARE
  PENSION
  FULLY_REMOTE
  FREE_FOOD
  UNLIMITED_PTO
  HYBRID
  ONSITE
  DAY_CARE
}

Enum ImmigrationStatus {
  jobId int [ref > JobListings.id]
  immigrationStatus ImmigrationStatus
}

Enum ImmigrationStatus {
  US_CITIZEN
  H1B
  OPT_STEM
  TN
  TPS
  Other
}

Enum EducationLevel {
  DIPLOMA
  HIGH_SCHOOL
  ASSOCIATE
  BACHELORS
  MASTERS
  PHD

}