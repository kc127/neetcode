/*

KnotCo is creating a wedding RSVP website for the engaged couple to send invitations to their guests. The couple sends save-the-date details specifying the date, location, itinerary, and any custom details. The guests RSVP by specifying if they'll bring an extra person (a plus one) and picking an entrée selection.

Design KnotCo's software as a set of classes with their attributes and APIs.

Requirements:

users should be able
0. to create an event
1. to send wedding invitations to guest/s
2. to add/delete/edit date + location + itinerary + other details in the invitation
3. to RSVP to invitation with plus one and entree selection

system should be able
4. to update entities based on RSVP response


MODEL CLASSES

Guest
  + id: integer
  + name: string
  + date: dateTime
  + age: integer
  + plusOne: Guest
  + entree: Entree
  + RSVP: RSVP

Entree
  + NONVEG
  + VEG
  + VEGAN

RSVP
  + YES
  + NO
  + MAYBE

Invitation
  + id : integer
  + email: integer
  + event: Event
  + plusOne: Guest

  createInvitation(id, event) {
    this.id = id;
    this.event = event;
  }

Event
  + id: integer
  + name: string
  + date: dateTime
  + location: string
  + creator: string
  + numberOfGuests: Integer

  createEvent(id, name, date, locatior, creator, numberOfGuests) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.creator = creator;
    this.numberOfGuests = numberOfGuests;
  }


CONTROLLER (user-facing vs admin-purposes)

  EventController


  InvitationController
    - sendInvitation()

  GuestController



KnotCo is creating a wedding RSVP website for the engaged couple to send invitations to their guests. The couple sends save-the-date details specifying the date, location, itinerary, and any custom details. The guests RSVP by specifying if they'll bring an extra person (a plus one) and picking an entrée selection.

Design KnotCo's software as a set of classes with their attributes and APIs.




Wedding/Event
  id:
  date:
  active: boolean
  description: String
  location: String
  guests: [Guest]

Guest:
  name: String
  plusOne: Guest
  entree: Entree
  wedding: Wedding

RSVP:
  id:
  email: string
  status: RSVP_STATUS
  wedding: Wedding
  entree: Entree[]


Entree:
  id
  name:
  description



RSVP_RESPONSE: Enum
  Yes, No, Not_Responded

RSVPController
  createWedding(date, description, location)
  sendInvitations(wedding)
  respondToInvitation()
  sendMessage(RSVP_RESPONSE, message)











*/


