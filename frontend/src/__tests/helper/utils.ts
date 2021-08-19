import {render} from "@testing-library/react";
import App from "../../App";
import {waitForAsyncUpdates} from "./waitForAsyncUpdates";
import React from "react";



export const renderComponent = async (reactComponent:React.ReactElement)=>{
    render(reactComponent);
    await waitForAsyncUpdates();
}