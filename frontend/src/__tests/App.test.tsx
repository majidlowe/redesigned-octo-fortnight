import React from 'react';
import {render, screen} from '@testing-library/react';
import App from '../App';
import {waitForAsyncUpdates} from "./helper/waitForAsyncUpdates";

const renderHome = async () => {
    render(<App/>);
    await waitForAsyncUpdates();
};

describe('the front page of a car lot application', () => {
    it('shows an app title', async () => {
        await renderHome();
        expect(screen.getByText(/SFC(ret.) JONES' CAR DEALERSHIP/i)).toBeInTheDocument();
    })
})
