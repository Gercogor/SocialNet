import React from "react";
import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";
import {render, screen, fireEvent} from "@testing-library/react";


describe('ProfileStatus component', () => {
    test('status from props should be in the state', async () => {
        const element = create(<ProfileStatus status={'Fuck'}/>)
        const span = await element.root.findByType("span");
        expect(span).not.toBeNull();
    })
    test('status from props should be in the state v2', async () => {
        const element = create(<ProfileStatus status={'Fuck'}/>)
        const span = await element.root.findByType("span");
        // eslint-disable-next-line testing-library/no-node-access
        expect(span.props.children).toBe('Fuck');
    })
    test('upper test by render', async () => {
        render(<ProfileStatus status={'Fuck'}/>);
        expect(await screen.findByText('Fuck')).toBeDefined()
    })
    test('input should be displayed instead span',  () => {
        const element = create(<ProfileStatus canChangeStatus={true} status={'Fuck'}/>)
        // eslint-disable-next-line testing-library/await-async-query
        const span = element.root.findByType("span");
        span.props.onDoubleClick();
        // eslint-disable-next-line testing-library/await-async-query
        const input = element.root.findByType("input");
        // eslint-disable-next-line testing-library/no-node-access
        expect(input.props.value).toBe('Fuck');
    })

})


