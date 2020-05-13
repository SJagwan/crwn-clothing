import React from 'react';
import './ShopPage.scss';
import {Route} from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../CollectionPage/Collection_Page';
import {createStructuredSelector} from 'reselect';

import {connect} from 'react-redux';
import {fetchCollectionStart} from '../../redux/shop/shop.action'
import {selectFetching,selectisLoaded} from '../../redux/shop/shop.selector';

import WithSpinner from '../../components/with-spinner/with-spinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {
 
    componentDidMount(){
        const {fetchCollectionStart}=this.props;
        fetchCollectionStart();
}

    render() {
        const {match,isFetching,isloaded}=this.props;
    
        return(
            <div className="shop_page">
               <Route exact path={`${match.path}`} render={(props)=> <CollectionsOverviewWithSpinner isloading={isFetching} {...props}/>}/>
               <Route path={`${match.url}/:collectionId`} render={(props)=> <CollectionsPageWithSpinner isloading={!isloaded} {...props}/>}/>
            </div>
        );

    }
        
}
const mapStateToProps = createStructuredSelector({
    isFetching:selectFetching,
    isloaded:selectisLoaded
})

const mapDispatchToState=(dispatch)=>({
    fetchCollectionStart:() => dispatch(fetchCollectionStart())

})

export default connect(mapStateToProps,mapDispatchToState)(ShopPage);