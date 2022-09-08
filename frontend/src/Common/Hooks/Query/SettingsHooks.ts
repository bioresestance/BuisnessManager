import { useQuery, useMutation, UseQueryOptions } from "react-query";
import API from "Common/API/Index";



export function useGetSettings( options?:any) {
    const queryResult = useQuery(["settings-get", "all"],  async ()=> await API.settings.get(), options );
    return queryResult;
}

export function useGetSettingsByGroup(groupName:string, options?:any) {
    const queryResult = useQuery(["settings-get", groupName], async ()=> await API.settings.getGroup(groupName), options );
    return queryResult;
}

export function useUpdateSettings(options?:any) {
    const mutateResults = useMutation(async (settingsData:object)=> await API.settings.update(settingsData), options);
    return mutateResults;
}

export function useUpdateSettingsByGroup( options?:any) {
    const mutateResults = useMutation(async (data:{groupName:string, settingsData:object})=> await API.settings.updateGroup( data.groupName, data.settingsData), options);
    return mutateResults;
}
