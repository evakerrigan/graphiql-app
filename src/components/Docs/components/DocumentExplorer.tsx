import {useQuery} from "@apollo/client";
import {Tree} from "./Tree.tsx";
import {IntrospectionQueryRequest} from "../IntrospectionQueryRequest.ts";

export const DocumentExplorer = () => {
    const {data} = useQuery(IntrospectionQueryRequest)

    return (
        <>
            {data ? <Tree data={data}/> : '...'}
        </>
    );
};

