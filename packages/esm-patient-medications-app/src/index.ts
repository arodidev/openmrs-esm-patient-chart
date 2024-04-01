import { defineConfigSchema, getAsyncLifecycle, getSyncLifecycle, translateFrom } from '@openmrs/esm-framework';
import { createDashboardLink, registerWorkspace } from '@openmrs/esm-patient-common-lib';
import { configSchema } from './config-schema';
import { dashboardMeta, moduleName } from './dashboard.meta';
import medicationsSummaryComponent from './medications-summary/medications-summary.component';
import activeMedicationsComponent from './active-medications/active-medications.component';
import revisedMedicationsComponent from './revised-medications/revised-medications.component';

export const importTranslation = require.context('../translations', false, /.json$/, 'lazy');

const options = {
  featureName: 'patient-medications',
  moduleName,
};

export function startupApp() {
  defineConfigSchema(moduleName, configSchema);
}

export const medicationsSummary = getSyncLifecycle(medicationsSummaryComponent, options);

export const activeMedications = getSyncLifecycle(activeMedicationsComponent, options);

export const reviseMedications = getSyncLifecycle(revisedMedicationsComponent, options);

export const drugOrderPanel = getAsyncLifecycle(
  () => import('./drug-order-basket-panel/drug-order-basket-panel.extension'),
  options,
);

export const medicationsDashboardLink =
  // t('Medications', 'Medications')
  getSyncLifecycle(
    createDashboardLink({
      ...dashboardMeta,
      moduleName,
    }),
    options,
  );

// t('addDrugOrderWorkspaceTitle', 'Add drug order')
registerWorkspace({
  name: 'add-drug-order',
  type: 'order',
  title: translateFrom(moduleName, 'addDrugOrderWorkspaceTitle', 'Add drug order'),
  load: getAsyncLifecycle(() => import('./add-drug-order/add-drug-order.workspace'), options),
});
