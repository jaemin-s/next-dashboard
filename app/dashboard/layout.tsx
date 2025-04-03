export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex">
            <aside className="w-64">
                <div>
                    <h1>페이지 이름</h1>
                </div>
                <nav>
                    <ul>
                        <li>메뉴 1</li>
                        <li>메뉴 2</li>
                        <li>메뉴 3</li>
                    </ul>
                </nav>
                <div>로그아웃</div>
            </aside>
            <div className="flex-1">{children}</div>
        </div>
    );
}
