import IssuesExplorer from '../explorer/issues-explorer';
import ConfigurationService from './configuration.service';
import GitIntegrationService from './git-integration.service';
import IssueHelperService from './issue-helper.service';
import LoggerService from './logger.service';
import NotificationService from './notifications.service';
import SelectValuesService from './select-values.service';
import StatusBarService from './status-bar.service';
import StoreService from './store.service';
import UtilitiesService from './utilities.service';

export const store = new StoreService();
export const configuration = new ConfigurationService();
export const issuesExplorer = new IssuesExplorer();
export const logger = new LoggerService();
export const utilities = new UtilitiesService();
export const selectValues = new SelectValuesService();
export const gitIntegration = new GitIntegrationService();
export const statusBar = new StatusBarService();
export const notifications = new NotificationService();
export const issueHelper = new IssueHelperService();
