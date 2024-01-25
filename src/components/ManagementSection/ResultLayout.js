import React from 'react';
import Topbar from '../Common/Topbar';
import LeftMenu from '../Common/LeftMenu';
import ResultInspection from './ResultInspection';

function ResultLayout() {
    return (
<div>
<Topbar />
<div className="contianer">
<LeftMenu />
<ResultInspection />
</div>
</div>
    )
}

export default ResultLayout;