import React,{lazy,Suspense} from 'react';
import './ShopPage.scss';
import {Route} from 'react-router-dom'
import {createStructuredSelector} from 'reselect';
import Spinner from '../../components/spinner/spinner'

import {connect} from 'react-redux';
import {fetchCollectionStart} from '../../redux/shop/shop.action'
import {selectFetching,selectisLoaded} from '../../redux/shop/shop.selector';

import WithSpinner from '../../components/with-spinner/with-spinner';

const CollectionOverview=lazy(()=> import('../../components/collection-overview/CollectionOverview'));
const CollectionPage=lazy(()=> import('../CollectionPage/Collection_Page'));

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
                <Suspense fallback={<Spinner/>}>
                <Route exact path={`${match.path}`} render={(props)=> <CollectionsOverviewWithSpinner isloading={isFetching} {...props}/>}/>
                <Route path={`${match.url}/:collectionId`} render={(props)=> <CollectionsPageWithSpinner isloading={!isloaded} {...props}/>}/>
                 </Suspense>
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