/*

Formation is a software engineering fellowship program that enables coaches to mentor Fellows through a shared platform. The platform schedules an optimal list of live group sessions between coaches and Fellows every Friday for the upcoming week. The focus of each session is to solve a prompt.

Assume the scheduler is limited to coach-led sessions containing 1 coach and several Fellows. Fellows and coaches are eligible for different session types depending on their current learning focuses. It considers numerous factors to optimize session effectiveness.

For example, the scheduler creates a session with a coach and 5 Fellows next Monday at 9 a.m. to solve a "Convert binary tree to sorted array" prompt.

Design Formation's session scheduling software as a set of classes with their attributes and APIs.

*/
class Prompt{
  constructor() {
    this.name = "str";
    this.question = "str";
    this.category = "str";
    this.solution = "str";
    this.level = "str";
  }
}

class Coach {
  constructor() {
    this.name = "str";
    this.subjectMatterExpert = "str";
    this.timeZone = "str";
    this.availabilityNextWeek = boolean;
  }
}

class Fellow {
  constructor() {
    this.name = "str";
    this.module = "str";
    this.timeZone = "str";
    this.availabilityNextWeek = boolean;
  }
}

class Session {
  constructor() {
    this.name = "str";
    this.prompt = new Prompt();
  }

}

class Scheduler  {
  constructor() {
    this.prompts = [];
    this.activeCoaches = [];
    this.activeFellows = [];
  }
  scheduleSession(sessionId, day, startTime, endTime)

  addFellowsToSession(sessionId, listOfFellows)

  removeFellowsFromSession(sessionId, fellowId)

  deleteSession(sessionId);
}

///// official session with solution + workthrough 
'''
Formation is a software engineering fellowship program that enables coaches to mentor Fellows through a shared platform. The platform schedules an optimal list of live group sessions between coaches and Fellows every Friday for the upcoming week. The focus of each session is to solve a prompt.

Assume the scheduler is limited to coach-led sessions containing 1 coach and several Fellows. Fellows and coaches are eligible for different session types depending on their current learning focuses. It considers numerous factors to optimize session effectiveness.

For example, the scheduler creates a session with a coach and 5 Fellows next Monday at 9 a.m. to solve a "Convert binary tree to sorted array" prompt.

Design Formation's session scheduling software as a set of classes with their attributes and APIs.


Clarifying Questions? (1-2 min. to read)
    - Take into account everyone's availability.
    - Should we ensure that the fellow hasn't attended a session that had that prompt before? YES
    - Need Questions
    - Can a fellow or mentor be focused on more than one "Learning Focus" at a time, ie available to go to either a graph or an array session.
        Types of Sessions: Coding, OOP Design, System Design
    - Can we assume a user can only be either a coach or a fellow but not both? YES


Idenitify Main Objects/Components:
    - User
        - id
        - Availability
        - name
        - email
        - LearningFocus

        send_message()

    - Fellow inherits User
        - Session history

    - Coach inherits User
        - SessionStrenght Map<promptId, count>
        - DissallowdSessions Set<promptid>

    - LearningFocus
        Type: Coding, OOP Design, System Design
            ALGO_WORKOUT
            FRONT_END_WORKOUT
            SYS_DES_WORKOUT
            TECH_DES_WORKOUT
            ENG_METHOD_BTCMP
        Description

    - Availability
        List[TimeChunk]

    - Days Of Week enum - Monday, Tuesday, Wednesday, ...

    TimeChunk:
        day_of_week
        start_hour
        end_hour

    - Scheduler (Orchestrator)
        - List of Fellows
        - List of Coaches
        - List of Sessions

        -scheduleSession(weekOfYear: int):
            idea => find coaches + fellows that fit into each session

            - loop thru each session:
                - find a coach that can run the session
                    - filter out coaches that Dissallowed it
                    - need some availability matching function to match ppl
                - find fellows to join the session (avoid if they did that sesssion ID in past 30 days)

    - Session
        - Id
        - Coach [Assigned via Scheduler]
        - List of fellows (cap 5) [Assigned via Scheduler]
        - prompt
        - TimeChunk

    - Prompt
        - name
        - level
        - question
        - category
        - solution


'''



# FINAL ANSWER FROM FORMATION:

# Fellow
#     id: int
#     name: string
#     availability: Availability
#     eligibility: list[SessionType]

# Coach
#     id: int
#     name: string
#     availability: Availability
#     eligibility: list[SessionType]

# Session
#     promptId: int
#     title: string
#     type: SessionType
#     startTime: DateTime
#     durationHrs: int
#     fellowInstructions: string
#     coachInstructions: string
#     host: Coach
#     participants: list[Fellow]

# Prompt
#     id: int
#     title: string
#     description: string

# Availability
#     availabilityWindows: queue[TimeWindow]]
#     overrides: list[Date]

# TimeWindow
#     dayOfWeek: DayOfWeek
#     startHour: int
#     endHour: int

# SessionScheduler
#     fellows: list[Fellow]
#     coaches: list[Coach]
#     sessionCalendar: list[Session]
#     // contains all the algorithmic complexity
#     createSessions(weekOfYear: int): list[Session]

# SessionType:enumeration
#     ALGO_WORKOUT
#     FRONT_END_WORKOUT
#     SYS_DES_WORKOUT
#     TECH_DES_WORKOUT
#     ENG_METHOD_BTCMP

# DayOfWeek:enumeration
#     SUN
#     MON
#     TUES
#     WED
#     THURS
#     FRI
#     SAT