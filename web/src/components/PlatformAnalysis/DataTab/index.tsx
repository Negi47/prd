import Box from '@material-ui/core/Box';
import React from 'react';
import GeneralDetailsFieldset from './GeneralDetailsFieldset';
import InspectionDetailsFieldset from './InspectionDetailsFieldset';
import OperationalDetailsFieldset from './OperationalDetailsFieldset';
import StructuralDetailsFieldset from './StructuralDetailsFieldset';
import PRDInspectionHistory from './PRDInspectionHistory';
import ApplicableOverpressureDemand from './ApplicableOverpressureDemand';

export default function DataTab({ hidden }: { hidden?: boolean }) {
    const content = React.useMemo(
        () => (
            <>
                <GeneralDetailsFieldset />
                <p></p>
                <StructuralDetailsFieldset />
                <p></p>
                <OperationalDetailsFieldset />
                <p></p>
                <InspectionDetailsFieldset />
                <p></p>
                <PRDInspectionHistory />
                <p></p>
                <ApplicableOverpressureDemand />
                <p></p>
            </>
        ),
        []
    );

    return <Box hidden={hidden}>{content}</Box>;
}
