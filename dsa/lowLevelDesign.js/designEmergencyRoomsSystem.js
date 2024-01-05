/*
HealCo is creating software to help emergency rooms (ERs) triage or dynamically prioritize urgent care for incoming patients based on severity. By default, HealCo uses 4 tiers of severity, from most severe to least: Life-threatening, urgent, major, and acute. For example, even if a patient in critical condition arrives after a patient with a broken arm, the software should prioritize that new patient for care.

HealCo's dashboard should be an all-in-one solution by allowing staff to manage the patients' status and dynamically reassigning nurses to treat whoever needs urgent care. Nurses can transition patients between severity levels as their condition changes. Once the nurses are done stabilizing or treating the patient, they will either admit them to the hospital or discharge them respectively to remove them from HealCo's system.

HealCo assumes a 1:1 ratio of medical staff to patient care and that all nurses are fungible by default. HealCo's software does not beep or flash; assume that HealCo integrates with other software to make all the announcements.

Design HealCo's software as a set of classes with their attributes and APIs.

Target Audience: Emergency Rooms
To Do What: Triage and/or dynamically prioritize urgent care
Assumptions:
  1. Anyone is a patient

Extended Requirements: Hospitals need HealCo to support multiple nurses attending to multiple patients for better care.

FLOW:
    getListOfPatients() => list[patient]
    getNurse()
    getPatient()
    getListOfNurses() => list[nurses]

Patient
  patient_id
  name
  age
  remarks
  severityLevel: Severity
  date
  status: Status

Status: enumeration
  ADMITTED
  DISCHARGED
  UNPROCESSED

Nurse
  nurse_id
  name
  status: Nurse_Status
  patient: list[patientIds]

Nurse_Status: enumeration
  ASSIGNED
  UNASSIGNED

NurseController
  getListOfNurses() => list[nurses]
  getNurse()

PatientController
  getListOfPatients() => list[patient]
  getPatient()

Controller
  assignNurseToPatient(nurseId, patientId) =>
  processPatient(patientId) =>
    0. update the patient object => status, severity level
    1. if patient is DISCHARGED,
          update Nurse status as UNASSIGNED


Severity: enumeration
  life-threatening
  urgent
  major
  acute

*/
