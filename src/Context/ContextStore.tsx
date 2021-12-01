import { createContext, useState } from "react";


type StoreProviderProp = {
	children: React.ReactNode;
};

type ValueType = {
	menuOpen: boolean;
	setMenuOpen: (T: boolean) => void;
	modalOpen: boolean;
	setModalOpen: (T: boolean) => void;
	secondModalOpen: boolean;
	setSecondModalOpen: (T: boolean) => void;
};

export const CurrentContext = createContext<ValueType>({
	menuOpen: false,
	setMenuOpen: () => {},
	modalOpen: false,
	setModalOpen: () => {},
	secondModalOpen: false,
	setSecondModalOpen: () => {},
});

export const StoreProvider: React.FC<StoreProviderProp> = ({ children }) => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const [secondModalOpen, setSecondModalOpen] = useState<boolean>(false);

	const value: ValueType = {
		menuOpen,
		setMenuOpen,
		modalOpen,
		setModalOpen,
		secondModalOpen,
		setSecondModalOpen,
	};

	return <CurrentContext.Provider value={value}>{children}</CurrentContext.Provider>;
};
