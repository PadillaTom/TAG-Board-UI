import ProtectedRoute from '../../components/library/routing/ProtectedRoute';

const PlatformUserLayout = ({ children }: { children: React.ReactNode }) => {
	return <ProtectedRoute>{children}</ProtectedRoute>;
};

export default PlatformUserLayout;
