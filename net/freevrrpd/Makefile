# Created by: Sebastien Petit <spe@phear.org>
# $FreeBSD$

PORTNAME=	freevrrpd
PORTVERSION=	1.1
PORTREVISION=	1
CATEGORIES=	net

MAINTAINER=	gnn@FreeBSD.org
COMMENT=	RFC 2338 compliant VRRP implementation

LICENSE=	BSD

USE_GITHUB=	yes
GH_ACCOUNT=	gvnn3
GH_PROJECT=	FreeVRRPd
DISTVERSIONPREFIX=	v

MAKE_ENV=	PTHREAD_CFLAGS="${PTHREAD_CFLAGS}" \
		PTHREAD_LIBS="${PTHREAD_LIBS}"

do-install:
	${INSTALL_PROGRAM} ${WRKSRC}/freevrrpd ${STAGEDIR}${PREFIX}/sbin
	${INSTALL_DATA} ${WRKSRC}/freevrrpd.conf.sample \
		${STAGEDIR}${PREFIX}/etc
	${INSTALL_SCRIPT} ${WRKSRC}/rc.d/freevrrpd \
		${STAGEDIR}${PREFIX}/etc/rc.d
	${INSTALL_MAN} ${WRKSRC}/${PORTNAME}.8 \
		${STAGEDIR}${MANPREFIX}/man/man8

.include <bsd.port.mk>
