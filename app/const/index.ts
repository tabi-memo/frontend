export const INVITATION_PERMISSION_LEVEL = [
  { value: 'editable', label: 'Can Edit' },
  { value: 'view_only', label: 'View Only' }
] as const

export type InvitationPermissionLevelType =
  (typeof INVITATION_PERMISSION_LEVEL)[number]['value']
