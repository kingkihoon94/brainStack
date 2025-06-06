# 프록시 서버를 이용한 CORS 우회

프록시 서버를 이용한다면 CORS 설정 없이도 SOP(Same-Origin Policy)를 우회할 수 있습니다. 여기서 이야기하는 프록시 서버는 브라우저 대신 외부 서버에 요청을 보내고 응답을 받는 역할을 대리 수행하는 서버입니다.

## 원리 설명

브라우저는 보안상의 이유로 동일 출처 정책(SOP)을 따릅니다. 이로 인해 클라이언트 측에서 자신과 다른 도메인(origin)의 리소스에 접근하려 하면, CORS 설정이 되어 있지 않다면 요청이 차단됩니다.

하지만 서버 간 통신(Server-to-Server)에는 이러한 SOP가 적용되지 않기 때문에, 브라우저 대신 프록시 서버를 통해 외부 요청을 보내면 제한을 피할 수 있습니다.

## 예시 시나리오

* **클라이언트 도메인**: `client.com`
* **서버 도메인**: `server.com`

브라우저에서 `client.com`에서 직접 `server.com`에 요청을 보내는 경우, CORS 설정이 되어 있지 않으면 SOP에 의해 요청이 차단됩니다.

하지만 다음과 같은 방법을 사용할 수 있습니다:

1. 브라우저는 `client.com/api/xxx`에 요청을 보냅니다.
2. `client.com` 서버는 해당 요청을 받아 내부적으로 `server.com`에 HTTP 요청을 보냅니다.
3. `server.com`에서 받은 응답을 다시 브라우저로 전달합니다.

이 방식은 브라우저가 `client.com`으로만 요청하고 응답받기 때문에, 브라우저 입장에서는 동일 origin으로 간주되어 SOP 제한을 받지 않습니다.

## 요약

* SOP는 브라우저에만 적용됨
* 서버 간 통신은 SOP 제한 없음
* 프록시 서버를 통해 외부 요청을 대리하면 CORS 없이도 통신 가능

이 방식은 개발 환경에서 CORS를 간단히 우회할 수 있는 유용한 방법이며, 실제 배포 환경에서도 API Gateway나 BFF(Backend For Frontend) 패턴으로 활용됩니다.
