import { useState } from "react";
import data from '../data.json'
import {
    RuxTable,
    RuxTableBody,
    RuxModal
} from '@astrouxds/react'
import { TableHeader } from './TableHeader';
import { TableCell } from './TableCell';

export const Table = () => {

    const [rows, setRows] = useState(data);

    const [allValues, setAllValues] = useState({
        isOpen: false,
        modalTitle: '',
        modalMessage: ''
    });

    return (
        <>
            <RuxTable>
                <TableHeader />
                <RuxTableBody>
                    {rows.map((contact, index) => {
                        return (
                            <TableCell
                                data={contact}
                                key={index}
                                onDetail={(...prev) => setAllValues({ isOpen: true, modalTitle: prev[0], modalMessage: prev[1] })}
                            />
                        )
                    })}
                </RuxTableBody>
            </RuxTable>
            <RuxModal open={allValues.isOpen} modal-title={allValues.modalTitle} modal-message={allValues.modalMessage} confirm-text="OK" deny-text=""></RuxModal>
        </>
    )
}