import MetaHead from "./metaHead";

export default function Layout({ children, pageMeta }) {
    return (
        <div>
            <MetaHead pageMeta={pageMeta} />
            {children}
        </div>
    )
}
