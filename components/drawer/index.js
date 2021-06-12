import Link from 'next/link'
import Icon from 'react-icons-kit'
import { chevronRight } from 'react-icons-kit/feather'

const Index = (props) => {
    return (
        <div className="custom-drawer-container">

            {/* Backdrop */}
            <div className={props.show ? "backdrop open-backdrop" : "backdrop"} onClick={props.onHide}></div>

            {/* Drawer */}
            <div className={props.show ? "drawer open-drawer" : "drawer"}>
                <h6>All Categories</h6>
                <hr />
                <Link href="/">
                    <button type="button" className="text-left btn shadow-none btn-block">
                        Home<Icon icon={chevronRight} className="float-right" size={18} />
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Index;