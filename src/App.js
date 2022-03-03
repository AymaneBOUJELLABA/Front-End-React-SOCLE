import React, { useEffect, useState } from 'react';
import './App.css';

import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import SideMenu from './components/sidemenu/sidemenu';

import DataContext from './storage/dataContext';
import { getAllCandidats } from './services/candidatsService';
import { getAllFormations } from './services/formationsService';
import { getAllEnseignants } from './services/enseignantsService';
import { getAllPromotions } from './services/promotionsService';


const { Content, Footer} = Layout;

function App()
{
  const [state, setState] = useState({
    candidats : [],
    formations : [],
    promotions : [],
    enseignants : []
  });


  useEffect(() =>
  {
    //CHARGER LES DONNES
    async function loadEnseignants()
    {
        const e = await getAllEnseignants();
        console.log('liste des enseignants ',e);
        
        setState({
          ...state,
          enseignants : e
        })
    }
    async function loadCandidats()
    {
        const c = await getAllCandidats();
        console.log('liste des Candidats ',c);
        
        setState({
          ...state,
          candidats : c
        })
    }
    async function loadFormations()
    {
        const c = await getAllFormations();
        console.log('liste des Formations ',c);
        
        setState({
          ...state,
          formations : c
        })
    }
    async function loadPromotions()
    {
        const c = await getAllPromotions();
        console.log('liste des Promotions ',c);
        
        setState({
          ...state,
          promotions : c
        })
    }
    

    loadEnseignants();
    loadFormations();
    loadPromotions();
    loadCandidats();
    return () => {
      
    };
  }, []);

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
