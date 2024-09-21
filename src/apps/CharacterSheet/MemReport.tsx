import React from "react";
import { MemReport } from "../Shared/Types";
import styled from "styled-components";

type Props = {
    memReport?: MemReport;
}

const MemoryReport:React.FunctionComponent<Props> = ({memReport}: Props) => {
    if (!memReport) return undefined;

    return (
        <Container>
            {memReport.byKey.sort(
                (a,b) => b.mem - a.mem
            ).map((report, idx) => (
                <div key={idx}>
                    {report.mem} - {report.key}
                </div>
            ))}
            total: {memReport.memTotal}
        </Container>
    )
}

const Container = styled.div`
    font-size: 12px;
`

export default MemoryReport;