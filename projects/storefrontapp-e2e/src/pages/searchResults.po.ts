import { AppPage } from './../app.po';
import { Header } from './../cmslib/header.po';
import { browser, element, by } from 'protractor';
import { E2EUtil } from './../util.po';
export class SearchResultsPage extends AppPage {
  getProductListItems() {
    return E2EUtil.getComponentWithinParent(
      'y-product-list',
      'y-product-list-item'
    );
  }

  findProductByDescriptionInPage(productDescription: string) {}

  navigateTo(searchKey: string) {
    return browser.get('/search/' + searchKey);
  }
}
