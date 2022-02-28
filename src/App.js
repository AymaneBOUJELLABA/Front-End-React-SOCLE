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
    async function loadData()
    {
        const c = await getAllCandidats();
        const e = await getAllEnseignants();
        const f = await getAllFormations();
        const p = await getAllPromotions();

        
        console.log('liste des condidats ',c);
        console.log('liste des enseignants ',e);
        console.log('liste des formations ',f);
        console.log('liste des promotions ',p);

        setState({
          candidats : c,
          formations : f,
          promotions : p,
          enseignants : e
        })
    }

    loadData();
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
