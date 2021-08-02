import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/lead_server_reducer";
import { hostAddress } from "../utils/helpers";

const initialState = {
  leads_loading: false,
  leads_error: false,
  leads: [],
  filterLeads: [],
};

const LeadServerContext = React.createContext();

export const LeadServerProvider = ({ children }) => {
  // Don't {} intead of []
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchLeads = async () => {
    try {
      const responce = await fetch(`${hostAddress}/api/allleads`);
      const leadsData = await responce.json();
      console.log(leadsData);
      dispatch({ type: "getLeadsProductSuccess", payload: leadsData });
    } catch (error) {
      console.log(error);
    }
  };

  const updateFilterData = async (queryString) => {
    console.log(queryString);
    const data = {
      string: queryString
    }
    // Waiting for filter url
    // dispatch({ type: 'getLeadsFilterDataSuccess', payload:  })
    try {
      const responce = await fetch(`${hostAddress}/api/getFilterData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      const leadsData = await responce.json();
      const filterData = leadsData.filter((lead) => lead.LeadID !== "13953");

      dispatch({ type: "getLeadsFilterDataSuccess", payload: filterData });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchLeads();
  }, []);
  return (
    <LeadServerContext.Provider value={{ ...state, updateFilterData }}>
      {children}
    </LeadServerContext.Provider>
  );
};

//make sure use
export const useLeadServerContext = () => {
  return useContext(LeadServerContext);
};
