import { createContext } from "react";
import { User } from "../types/user";

// コンテクスト用の型を定義
type UserContextType = User | null | undefined;

// コンテクストを作成
const AuthContext = createContext<UserContextType>(undefined);