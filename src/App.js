import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import Page from "./Page";

import { generatePalette } from "./colorHelpers";
import seedColors from "./seedColors";

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    console.log(savedPalettes);
    this.state = { palettes: savedPalettes || seedColors };
  }

  findPalette = (id) => {
    return this.state.palettes.find(function (palette) {
      return palette.id === id;
    });
  };

  savePalette = (newPalette) => {
    this.setState({ palettes: [...this.state.palettes, newPalette] }, () =>
      this.syncLocalStorage()
    );
  };

  deletePalette = (id) => {
    this.setState(
      (st) => ({
        palettes: st.palettes.filter((palette) => palette.id !== id),
      }),
      () => this.syncLocalStorage()
    );
  };

  syncLocalStorage = () => {
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  };

  render() {
    return (
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="page" timeout={500}>
                <Switch location={location}>
                  <Route
                    exact
                    path="/palette/new"
                    render={(routeProps) => (
                      <Page>
                        <NewPaletteForm
                          savePalette={this.savePalette}
                          palettes={this.state.palettes}
                          {...routeProps}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/"
                    render={(routeProps) => (
                      <Page>
                        <PaletteList
                          palettes={this.state.palettes}
                          deletePalette={this.deletePalette}
                          {...routeProps}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:id"
                    render={(routeProps) => (
                      <Page>
                        <Palette
                          palette={generatePalette(
                            this.findPalette(routeProps.match.params.id)
                          )}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:paletteId/:colorId"
                    render={(routeProps) => (
                      <Page>
                        <SingleColorPalette
                          palette={generatePalette(
                            this.findPalette(routeProps.match.params.paletteId)
                          )}
                          colorId={routeProps.match.params.colorId}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    render={(routeProps) => (
                      <Page>
                        <PaletteList
                          palettes={this.state.palettes}
                          deletePalette={this.deletePalette}
                          {...routeProps}
                        />
                      </Page>
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;
