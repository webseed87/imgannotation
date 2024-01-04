
import Toolbar from './Toolbar';
import Topinfo from './Topinfo';
import Workcanvas from './Workcanvas';
import Label from './Label';

function Workspace() {
  return (
    <div className="Workspace">
     <Topinfo />
     <Toolbar />
     <Workcanvas />
     <Label />
    </div>
  );
}

export default Workspace;
