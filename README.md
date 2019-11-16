Politicate Client

### Getting Started:

1. Install Docker for Mac 18.05.0 CE – Edge Release [https://docs.docker.com/docker-for-mac/install/]
   - Enable Kubernetes under Preference Pane UI
2. Install the Kuberenetes command line tool, kubectl
   `brew install kubectl`
3. Install kubernetes-helm package manager
   `brew install kubernetes-helm`
4. Make sure Tiller server is downloaded
   `helm init --upgrade`
5. Build the Docker image
   `docker build -t politicate-client -f Dockerfile .`
6. Run a local Docker registry, tag the image, and push it to your registry
   `docker run -d -p 5000:5000 --restart=always --name registry registry:2`
   `docker tag politicate-client localhost:5000/politicate-client:1.0.0`
   `docker push localhost:5000/politicate-client:1.0.0`
7. Install the service to Kubernetes using Helm
   `helm install --name politicate-client ./charts`
8. Follow the instructions printed in the console to open in the browser

### Technology Documentation

- TypeScript [https://www.typescriptlang.org/docs/home.html]
- Razzle [https://github.com/jaredpalmer/razzle]
- React.js [https://reactjs.org/docs/getting-started.html]
- Docker [https://docs.docker.com/]
- Kubernetes [https://kubernetes.io/docs/home/]
- Helm [https://github.com/CloudNativeJS/helm]
