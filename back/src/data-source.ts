import { DataSource } from "typeorm";
import path from "path";
import "dotenv/config"
import { User } from "./entities/user.entity";
import { Contact } from "./entities/contacts.entity";
import { initial1679505947010 } from "./migrations/1679505947010-initial";

const AppDataSource = new DataSource(
   {
       type: "sqlite",
       database: "db.sqlite3",
       logging: true,
       synchronize: false,
       entities: [User, Contact],
      migrations: [initial1679505947010],
   }
)

export default AppDataSource