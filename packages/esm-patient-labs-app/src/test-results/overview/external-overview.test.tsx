import React from 'react';
import ExternalOverview, { useFilteredOverviewData } from './external-overview.extension';
import { screen, render, waitFor } from '@testing-library/react';
import { jest } from '@jest/globals';
import userEvent from '@testing-library/user-event';
import { mockPatient, waitForLoadingToFinish } from 'tools';
import { visitOverviewDetailMockDataNotEmpty } from '__mocks__';
import type { PanelFilterProps } from '@openmrs/esm-patient-common-lib';
// import { navigate } from '@openmrs/esm-framework';

jest.mock('@openmrs/esm-framework', () => ({
  navigate: jest.fn(),
}));

// jest.mock('./external-overview.extension', () => ({
//     const originalModule = jest.requireActual('./external-overview.extension')

//     return({
//      ...originalModule,
//      useFilteredOverviewData: jest.fn()
//     })
// }));

const mockVisit = visitOverviewDetailMockDataNotEmpty.data.results[0];
const encounterIds = mockVisit?.encounters.map((e) => `Encounter/${e.uuid}`);

const mockTestFilter = (filterProps: PanelFilterProps) => {
  const [entry] = filterProps;
  return encounterIds.includes(entry.encounter?.reference);
};

describe('ExternalOverview', () => {
  it('Should ensure the see all results button displays all results', async () => {
    // const user = userEvent.setup();
    // useFilteredOverviewData.mockReturnValue({ overviewData: [], loaded: false, error: null });
    // await waitFor(() => render(<ExternalOverview patientUuid={mockPatient.id} filter={() => false} />));
    // await waitForLoadingToFinish();
    // expect(screen.getByText(/recent test results/i)).toBeInTheDocument();
    // const allResultsButton = screen.getByTestId('see-all-button');
    // expect(allResultsButton).toBeInTheDocument();
    // const moreResultsButton = screen.getByRole('button', { name: /More Results available/i });
    // expect(moreResultsButton).toBeInTheDocument();
    // user.click(allResultsButton);
    // expect(moreResultsButton).not.toBeInTheDocument();
  });
});
