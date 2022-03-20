import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./components/simple/dashboard/dashboard.component";
import {ROUTES_ENUM} from "./constants/routing.constants";
import {MarkdownViewerComponent} from "./components/simple/markdown-viewer/markdown-viewer.component";
import {AboutComponent} from './components/about/about.component';

const routes: Routes = [
  // main
  {path: ROUTES_ENUM.Dashboard, component: DashboardComponent},
  {path: ROUTES_ENUM.About, component: AboutComponent},
  {path: ROUTES_ENUM.MarkdownViewer + "/:path", component: MarkdownViewerComponent},
  {path: "**", redirectTo: ROUTES_ENUM.Dashboard},
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes, {useHash: true, relativeLinkResolution: "legacy"})],
})
export class AppRoutingModule {
}
