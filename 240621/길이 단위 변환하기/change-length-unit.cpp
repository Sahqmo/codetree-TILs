#include <iostream>
using namespace std;

int main() {
    // 여기에 코드를 작성해주세요.
    cout << fixed;

    double ft = 30.48;
    int mi = 160934;

    cout.precision(1);
    cout << "9.2ft = " << 9.2*ft << "cm";
    cout << endl;
    cout << "1.3mi = " << 1.3*mi << "cm";

    return 0;
}