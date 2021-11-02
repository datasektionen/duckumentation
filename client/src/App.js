import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import Methone, { Header } from 'methone';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import './App.css'

const url = (path) => process.env.REACT_APP_BASE_URL + path

const App = () => {

    const links = [
        {
            label: "Hem",
            to: "/",
        },
        {
            label: "Duckumentation",
            to: "/duckumentation",
            api: "/api/duckumentation",
        },
        {
            label: "dfunkt",
            to: "/dfunkt",
            api: "/api/dfunkt",
        },
        {
            label: "nAllen",
            to: "/nallen",
            api: "/api/nallen",
        },
        {
            label: "damm",
            to: "/damm",
            api: "/api/damm",
        },
        {
            label: "spam2",
            to: "/spam2",
            api: "/api/spam2",
        },
        {
            label: "pls",
            to: "/pls",
            api: "/api/pls"
        },
    ]

    return (
        <div id="application" className="green">
            <Methone
                config={{
                    system_name: 'duckumentation',
                    color_scheme: 'green',
                    links: links.map((l, i) => <Link to={l.to} key={"methonel-"+i}>{l.label}</Link>),
                }}
            />
            <Switch>
                <Route exact path="/">
                    <Header title="API-specifikationer 🦆" />
                    <div id="content">
                        <p>
                            På denna sida finns Konglig Datasektionens API-specifikationer (de system som någon orkat skriva en OpenAPI-specifikation för). Saknar du något system på denna sida? Vill du bidra? Skriv en specifikation för ett nuvarande system.
                            Kontakta <a href="mailto:d-sys@d.kth.se">Systemansvarig</a> eller <a href="mailto:ior@d.kth.se">IOR</a> om du är intresserad.
                        </p>
                        <ul>
                            {links.map((l, i) =>
                                <li key={"li-"+l.label+"-"+i}>
                                    <Link to={l.to}>{l.label}</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </Route>
                {links.filter(x => x.api).map((l, i) =>
                    <Route exact path={l.to} key={"route-"+l.to}>
                        <Header title={l.label} />
                        <SwaggerUI url={url(l.api)} />
                    </Route>
                )}
                {/* 404, redirect to home */}
                <Route>
                    <Redirect to="/" />
                </Route>
            </Switch>
        </div>
    )
}

export default App;
