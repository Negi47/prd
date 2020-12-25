import axios from 'axios';
import React, { PropsWithChildren } from 'react';
import * as yup from 'yup';
import Subject from '../modules/Subject';

export const DecimalLikeSchema = yup
    .string();

export const IntegerSchema = yup
    .number();

export const DateSchema = yup
    .date()
    .typeError('Date should have pattern dd/MM/yyyy');

export const PlatformSchema = yup
    .object({
        id: yup.number(),
        PRD_identification_number: IntegerSchema,
        PRD_function: yup.string(),
        Installation_of_PRD: DateSchema,
        RBI_assessment_date: DateSchema,
        Type_of_PRD: yup.string(),
        PRD_Containing_Soft_Seats: yup.string(),
        PRD_set: yup.number(),
        Service_severity : yup.string(),
        PRD_Discharge_Location : yup.string(),
        Environment_Factor_Modifier : yup.string(),
        Rupture_disk_is_installed_upstream_of_PRD : yup.string(),
        
    })
    .noUnknown();

export const PlatformListSchema = yup.array(PlatformSchema);

declare global {
    export type Platform = yup.InferType<typeof PlatformSchema>;
}

export type ListParam = {
    filter?: {
        project?: number;
        site__project?: number;
    };
};

class PlatformListSubject extends Subject<Platform[] | null> {
    list = this.createAsync(async (param: ListParam = {}) => {
        const { data } = await axios.get<Platform[]>('/api/gen-info/', {
            params: param.filter,
            transformResponse(data) {
                return PlatformListSchema.validateSync(data);
            },
        });
        return data;
    });
}

export function usePlatformList(): { subject: PlatformListSubject } {
    const ref = React.useRef<PlatformListSubject>();

    if (!ref.current) {
        ref.current = new PlatformListSubject(null);
    }

    return { subject: ref.current };
}

const PlatformListContext = React.createContext<PlatformListSubject>(
    null as any
);

export function usePlatformListContext(): PlatformListSubject {
    return React.useContext(PlatformListContext);
}

export default function PlatformListProvider({
    children,
    subject,
}: PropsWithChildren<{ subject: PlatformListSubject }>) {
    return (
        <PlatformListContext.Provider value={subject}>
            {children}
        </PlatformListContext.Provider>
    );
}