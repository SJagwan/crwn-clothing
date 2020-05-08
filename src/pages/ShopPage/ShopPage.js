import React from 'react';
import './ShopPage.scss';
import {Route} from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../CollectionPage/Collection_Page';
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.action'
import {firestore,covertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import WithSpinner from '../../components/with-spinner/with-spinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {
    state={
        loading:true
    };
    
    unsubscribeFromSnapshot=null;
    componentDidMount(){
        const {updateCollections}=this.props;
        const collectionRef=firestore.collection('collection');
        this.unsubscribeFromSnapshot=collectionRef.onSnapshot(async snapshot =>{
            const collectionMap=covertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionMap);
            this.setState({loading:false})
        }) 
}

    render() {
        const {match}=this.props;
        const {loading}=this.state;
        return(
            <div className="shop_page">
               <Route exact path={`${match.path}`} render={(props)=> <CollectionsOverviewWithSpinner isloading={loading} {...props}/>}/>
               <Route path={`${match.url}/:collectionId`} render={(props)=> <CollectionsPageWithSpinner isloading={loading} {...props}/>}/>
            </div>
        );

    }
        
}
const mapDispatchToState=(dispatch)=>({
    updateCollections: collectionMap =>dispatch(updateCollections(collectionMap))

})

export default connect(null,mapDispatchToState)(ShopPage);