import React, { useEffect, useState } from 'react';
import './App.css';

import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import SideMenu from './components/sidemenu/sidemenu';

import DataContext from './storage/dataContext';
import { getAllCandidats } from './services/candidatsService';
import { getAllFormations } from './services/formationsService';
import { getAllEnseignants, getAllEnseignantsFromProf } from './services/enseignantsService';
import { getAllPromotions } from './services/promotionsService';


const { Content, Footer} = Layout;

function App()
{
  const [enseignants,setEnseignant] = useState([]);
  const [enseignantsProf,setEnseignantsProf] = useState([]);
  const [formations,setFormations] = useState([]);
  const [promotions,setPromotions] = useState([]);  
  const [candidats,setCandidats] = useState([]);

  useEffect(() =>
  {
    //CHARGER LES DONNES
    async function loadEnseignants()
    {
        const e = await getAllEnseignants();
        const ep = await getAllEnseignantsFromProf();
        setEnseignant(e);
        setEnseignantsProf(ep);
    }
    async function loadCandidats()
    {
        const c = await getAllCandidats();
        setCandidats(c);
    }
    async function loadFormations()
    {
        const f = await getAllFormations();
        setFormations(f);
    }
    async function loadPromotions()
    {
        const p = await getAllPromotions();
        setPromotions(p);
    }
    

    loadEnseignants();
    loadFormations();
    loadPromotions();
    loadCandidats();
    return () => {
      
    };
  }, []);


  let state = {
    enseignantsProf : enseignantsProf,
    enseignants : enseignants,
    formations : formations,
    promotions : promotions,
    candidats : candidats
  }
  return (
    <Layout style={{height: '100vh'}}>
      <SideMenu />
      <Layout>
          <Content style={{ margin: '24px 16px 0'}}>
              <div className="content" style={{ padding: 24, height: '100%' }}>
                <DataContext.Provider value={state}>
                  <Outlet />
                </DataContext.Provider>
              </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>M2 DOSI - UBO ©2022 Created by BOUJELLABA Aymane</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
