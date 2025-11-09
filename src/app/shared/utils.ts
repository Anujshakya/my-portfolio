import {APP_CONSTANTS} from './constants';

export function skillImageUrl(skillName: string): string {
  return `./assets/images/icons/${skillName.toLowerCase()}.png`;
}

export function getProjectStatusBadgeColor(status: string): string {
  const projectStatus = APP_CONSTANTS.projectStatus;

  switch (status) {
    case projectStatus.COMPLETED:
      return 'badge-success';
    case projectStatus.IN_PROGRESS:
      return 'badge-info';
    case projectStatus.PENDING:
      return 'badge-warning';
    case projectStatus.ON_HOLD:
      return 'badge-error';
    default:
      return 'badge-outline';
  }
}
