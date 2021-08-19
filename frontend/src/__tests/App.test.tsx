import React from 'react';
import {render, screen} from '@testing-library/react';
import App from '../App';
import {renderComponent} from "./helper/utils";


describe('the front page of a car lot application', () => {
    it('shows an app title', async () => {
        await renderComponent(<App/>);
        expect(screen.getByText("SFC(ret.) JONES' CAR DEALERSHIP")).toBeInTheDocument();
    })
})
