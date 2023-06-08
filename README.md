# 概要

簡易的な権限管理のある CRUD サービスを開発する

# 要件

1. admin ユーザーは全てのリソースに対して、read, write, delete できる
2. super_user は特定のリソースに対して、read, write できる
3. user は特定のリソースに対して、read できる

# 実装する API

`CreateResource` → Resource を作成する

`ReadResource` → Resource を取得する

`UpdateResource` → Resource を更新する

`DeleteResource` → Resource を削除する

# 行わないこと

- 認証

# 設計

## DB 設計及び実データ

```
ユーザーテーブル (Users):
+----+-------------+
| id | name        |
+----+-------------+
| 1  | admin1      |
| 2  | admin2      |
| 3  | mr.super    |
| 4  | mr.normal1  |
| 5  | mr.normal2  |
+----+-------------+

ロールテーブル (Roles):
+----+--------------------+
| id | name               |
+----+--------------------+
| 1  | admin              |
| 2  | super_user         |
| 3  | user               |
+----+--------------------+

ユーザーロールテーブル (UserRoles):
+---------+--------------+
| user_id | role_id      |
+---------+--------------+
| 1       | 1            |
| 2       | 1            |
| 3       | 2            |
| 4       | 3            |
| 5       | 3            |
+---------+--------------+

リソーステーブル (Resources):
+----+-----------------+
| id | name            |
+----+-----------------+
| 1  | resource1       |
| 2  | resource2       |
| 3  | resource3       |
+----+-----------------+

ロールリソーステーブル (RoleResources):
+---------+------------+------------------+
| role_id | resource_id | permissions     |
+---------+------------+------------------+
| 2       | 1          | read, write      |
| 2       | 2          | read, write      |
| 2       | 3          | read, write      |
| 3       | 1          | read             |
| 3       | 2          | read             |
| 3       | 3          | read             |
+---------+------------+------------------+
```

# 環境の立ち上げ方

1. `docker-compose up --build`
2. `docker-compose exec api sh` (tty: tru にしているので sh に入って操作しましょう)

## 開発サーバー

```
# yarn start:dev
```

## Sample Proto の型生成

```
# yarn codegen
```
