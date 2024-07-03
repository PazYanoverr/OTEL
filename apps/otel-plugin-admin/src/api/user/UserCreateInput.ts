import { AccountCreateNestedManyWithoutUsersInput } from "./AccountCreateNestedManyWithoutUsersInput";
import { ApiKeyCreateNestedManyWithoutUsersInput } from "./ApiKeyCreateNestedManyWithoutUsersInput";
import { AvailabilityCreateNestedManyWithoutUsersInput } from "./AvailabilityCreateNestedManyWithoutUsersInput";
import { BookingCreateNestedManyWithoutUsersInput } from "./BookingCreateNestedManyWithoutUsersInput";
import { CredentialCreateNestedManyWithoutUsersInput } from "./CredentialCreateNestedManyWithoutUsersInput";
import { DestinationCalendarWhereUniqueInput } from "../destinationCalendar/DestinationCalendarWhereUniqueInput";
import { EventTypeCreateNestedManyWithoutUsersInput } from "./EventTypeCreateNestedManyWithoutUsersInput";
import { FeedbackCreateNestedManyWithoutUsersInput } from "./FeedbackCreateNestedManyWithoutUsersInput";
import { ImpersonationCreateNestedManyWithoutUsersInput } from "./ImpersonationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { ScheduleCreateNestedManyWithoutUsersInput } from "./ScheduleCreateNestedManyWithoutUsersInput";
import { SelectedCalendarCreateNestedManyWithoutUsersInput } from "./SelectedCalendarCreateNestedManyWithoutUsersInput";
import { SessionCreateNestedManyWithoutUsersInput } from "./SessionCreateNestedManyWithoutUsersInput";
import { MembershipCreateNestedManyWithoutUsersInput } from "./MembershipCreateNestedManyWithoutUsersInput";
import { WebhookCreateNestedManyWithoutUsersInput } from "./WebhookCreateNestedManyWithoutUsersInput";
import { WorkflowCreateNestedManyWithoutUsersInput } from "./WorkflowCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  accounts?: AccountCreateNestedManyWithoutUsersInput;
  allowDynamicBooking?: boolean | null;
  apiKeys?: ApiKeyCreateNestedManyWithoutUsersInput;
  availability?: AvailabilityCreateNestedManyWithoutUsersInput;
  avatar?: string | null;
  away: boolean;
  bio?: string | null;
  bookings?: BookingCreateNestedManyWithoutUsersInput;
  brandColor: string;
  bufferTime: number;
  completedOnboarding: boolean;
  credentials?: CredentialCreateNestedManyWithoutUsersInput;
  darkBrandColor: string;
  defaultScheduleId?: number | null;
  destinationCalendar?: DestinationCalendarWhereUniqueInput | null;
  disableImpersonation: boolean;
  email: string;
  emailVerified?: Date | null;
  endTime: number;
  eventTypes?: EventTypeCreateNestedManyWithoutUsersInput;
  feedback?: FeedbackCreateNestedManyWithoutUsersInput;
  hideBranding: boolean;
  identityProvider: "CAL" | "GOOGLE" | "SAML";
  identityProviderId?: string | null;
  impersonatedBy?: ImpersonationCreateNestedManyWithoutUsersInput;
  impersonatedUsers?: ImpersonationCreateNestedManyWithoutUsersInput;
  invitedTo?: number | null;
  locale?: string | null;
  metadata?: InputJsonValue;
  name?: string | null;
  password?: string | null;
  plan: "FREE" | "TRIAL" | "PRO";
  role: "USER" | "ADMIN";
  schedules?: ScheduleCreateNestedManyWithoutUsersInput;
  selectedCalendars?: SelectedCalendarCreateNestedManyWithoutUsersInput;
  sessions?: SessionCreateNestedManyWithoutUsersInput;
  startTime: number;
  teams?: MembershipCreateNestedManyWithoutUsersInput;
  theme?: string | null;
  timeFormat?: number | null;
  timeZone: string;
  trialEndsAt?: Date | null;
  twoFactorEnabled: boolean;
  twoFactorSecret?: string | null;
  username?: string | null;
  verified?: boolean | null;
  webhooks?: WebhookCreateNestedManyWithoutUsersInput;
  weekStart: string;
  workflows?: WorkflowCreateNestedManyWithoutUsersInput;
};